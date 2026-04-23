export const contactConfig = {
  whatsappPhone: "525545650464",
  negociosWhatsAppMessage:
    "Hola Joskua, vi tu sitio de negocios y me interesa un diagnóstico.",
};

export function getWhatsAppHref(message = contactConfig.negociosWhatsAppMessage) {
  return `https://wa.me/${contactConfig.whatsappPhone}?text=${encodeURIComponent(
    message,
  )}`;
}
