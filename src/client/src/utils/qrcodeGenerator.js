import QRCode from "qrcode";

export const qrcodeGenerator = async (url) => {
  try {
    const result = await QRCode.toDataURL(url, {
      width: 400,
      margin: 2,
      color: {
        dark: "#335383FF",
        light: "#EEEEEEFF",
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
