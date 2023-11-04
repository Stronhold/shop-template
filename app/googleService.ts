import { google } from "googleapis";


export async function getData(sheetname: string) {
  const products = await getGoogleSheetData(sheetname);
  return {
    products
  }
}


function handleSpreadSheetApiResponse(googleSheetRows: any[] | undefined | null) {
  if (googleSheetRows) {
    console.log(googleSheetRows);
    return googleSheetRows.slice(1).map(item => ({
      name: item[0],
      image: item[1],
      price: item[2],
      quantity: item[3]
    })).filter(i => i.quantity > 0);
  }
  return;
}

async function getGoogleSheetData(sheetname: string) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: sheetname,
    });

    return handleSpreadSheetApiResponse(response.data.values);
  } catch (err) {
    console.log(err);
  }

  return [];
}
