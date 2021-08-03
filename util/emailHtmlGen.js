module.exports = {
  resetPasswordHTML: (tempPassword) => {
    return new Promise((resolve, reject) => {
      resolve(`<!DOCTYPE html>
      <html>
        <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <style type="text/css">
            /* CLIENT-SPECIFIC STYLES */
            body,
            table,
            td,
            a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              -ms-interpolation-mode: bicubic;
            }
      
            /* RESET STYLES */
            img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
            }
            table {
              border-collapse: collapse !important;
            }
            body {
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
            }
      
            /* MOBILE STYLES */
            @media screen and (max-width: 600px) {
              h1 {
                font-size: 32px !important;
                line-height: 32px !important;
              }
            }
      
            /* ANDROID CENTER FIX */
            div[style*="margin: 16px 0;"] {
              margin: 0 !important;
            }
          </style>
      
          <style type="text/css"></style>
        </head>
        <body
          style="
            background-color: #f4f4f4;
            margin: 0 !important;
            padding: 0 !important;
          "
        >
          <!-- HIDDEN PREHEADER TEXT -->
          <div
            style="
              display: none;
              font-size: 1px;
              color: #000000;
              line-height: 1px;
              font-family: Helvetica, Arial, sans-serif;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
            "
          >
            Reset your password
          </div>
      
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td bgcolor="#f4f4f4" align="center">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style="padding: 40px 10px 40px 10px"
                    ></td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- HERO -->
            <tr>
              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="center"
                      valign="top"
                      style="
                        padding: 40px 20px 20px 20px;
                        border-radius: 4px 4px 0px 0px;
                        color: #111111;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 48px;
                        font-weight: 400;
                        letter-spacing: 4px;
                        line-height: 48px;
                      "
                    >
                      <img
                        src="https://res.cloudinary.com/hfb-mobile/image/upload/v1627775926/Kohler-hfb-divider_ynvtr2.png"
                        height="100px"
                        width="300px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="center"
                      valign="top"
                      style="
                        padding: 40px 20px 20px 20px;
                        border-radius: 4px 4px 0px 0px;
                        color: #111111;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 48px;
                        font-weight: 400;
                        letter-spacing: 4px;
                        line-height: 48px;
                      "
                    >
                      <h1
                        style="
                          font-size: 28px;
                          font-weight: 400;
                          margin: 0;
                          letter-spacing: 0px;
                        "
                      >
                        Temporary password has been added
                      </h1>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- COPY BLOCK -->
            <tr>
              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 20px 30px 40px 30px;
                        color: #0e0d0d;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <p style="margin: 0">
                        You received this E-mail in response to your request to reset
                        your password. Please load HFB Mobile and input the following
                        password:
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 20px 30px 40px 30px;
                        color: #0e0d0d;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <h1 style="text-align: center">${tempPassword}</h1>
                    </td>
                  </tr>
      
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 0px 30px 0px 30px;
                        color: #0c0c0c;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    ></td>
                  </tr>
                  <!-- COPY -->
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 0px 30px 20px 30px;
                        color: #0f0e0e;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <p style="margin: 0">
                        If you have any questions, please contact your administrator
                      </p>
                    </td>
                  </tr>
                  <!-- COPY -->
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 0px 30px 40px 30px;
                        border-radius: 0px 0px 4px 4px;
                        color: #0c0b0b;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <p style="margin: 0">
                        Thank you ,<br />
                        HFB Mobile Support Team
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- FOOTER -->
            <tr>
              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <!-- ADDRESS -->
                  <tr>
                    <td
                      bgcolor="#f4f4f4"
                      align="left"
                      style="
                        padding: 0px 30px 30px 30px;
                        color: #585555;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 18px;
                      "
                    >
                      <p style="margin: 0">
                        Home Forever Baths <br />
                        476 Country Club Dr #464 <br />
                        Bensenville, IL 60106
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `);
    });
  },
  accountCreatedHTML: () => {
    return new Promise((resolve, reject) => {
      resolve(`<!DOCTYPE html>
      <html>
        <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <style type="text/css">
            /* CLIENT-SPECIFIC STYLES */
            body,
            table,
            td,
            a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              -ms-interpolation-mode: bicubic;
            }
      
            /* RESET STYLES */
            img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
            }
            table {
              border-collapse: collapse !important;
            }
            body {
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
            }
      
            /* MOBILE STYLES */
            @media screen and (max-width: 600px) {
              h1 {
                font-size: 32px !important;
                line-height: 32px !important;
              }
            }
      
            /* ANDROID CENTER FIX */
            div[style*="margin: 16px 0;"] {
              margin: 0 !important;
            }
          </style>
      
          <style type="text/css"></style>
        </head>
        <body
          style="
            background-color: #f4f4f4;
            margin: 0 !important;
            padding: 0 !important;
          "
        >
          <!-- HIDDEN PREHEADER TEXT -->
          <div
            style="
              display: none;
              font-size: 1px;
              color: #000000;
              line-height: 1px;
              font-family: Helvetica, Arial, sans-serif;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
            "
          >
            Account successfully created
          </div>
      
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td bgcolor="#f4f4f4" align="center">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      style="padding: 40px 10px 40px 10px"
                    ></td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- HERO -->
            <tr>
              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="center"
                      valign="top"
                      style="
                        padding: 40px 20px 20px 20px;
                        border-radius: 4px 4px 0px 0px;
                        color: #111111;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 48px;
                        font-weight: 400;
                        letter-spacing: 4px;
                        line-height: 48px;
                      "
                    >
                      <img
                        src="https://res.cloudinary.com/hfb-mobile/image/upload/v1627775926/Kohler-hfb-divider_ynvtr2.png"
                        height="100px"
                        width="300px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="center"
                      valign="top"
                      style="
                        padding: 40px 20px 20px 20px;
                        border-radius: 4px 4px 0px 0px;
                        color: #111111;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 48px;
                        font-weight: 400;
                        letter-spacing: 4px;
                        line-height: 48px;
                      "
                    >
                      <h1
                        style="
                          font-size: 28px;
                          font-weight: 400;
                          margin: 0;
                          letter-spacing: 0px;
                        "
                      >
                        Your account was successfully created with HFB-Mobile
                      </h1>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- COPY BLOCK -->
            <tr>
              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 20px 30px 40px 30px;
                        color: #0e0d0d;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <p style="margin: 0">
                        You received this E-mail in response to your request to create your account. Please load up HFB-Mobile and input your email and created password
                      </p>
                    </td>
                  </tr>
                  
      
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 0px 30px 0px 30px;
                        color: #0c0c0c;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    ></td>
                  </tr>
                  <!-- COPY -->
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 0px 30px 20px 30px;
                        color: #0f0e0e;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <p style="margin: 0">
                        If you have any questions, please contact your administrator
                      </p>
                    </td>
                  </tr>
                  <!-- COPY -->
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      style="
                        padding: 0px 30px 40px 30px;
                        border-radius: 0px 0px 4px 4px;
                        color: #0c0b0b;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 25px;
                      "
                    >
                      <p style="margin: 0">
                        Thank you ,<br />
                        HFB Mobile Support Team
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- FOOTER -->
            <tr>
              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 600px"
                >
                  <!-- ADDRESS -->
                  <tr>
                    <td
                      bgcolor="#f4f4f4"
                      align="left"
                      style="
                        padding: 0px 30px 30px 30px;
                        color: #585555;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 18px;
                      "
                    >
                      <p style="margin: 0">
                        Home Forever Baths <br />
                        476 Country Club Dr #464 <br />
                        Bensenville, IL 60106
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `);
    });
  },
};
