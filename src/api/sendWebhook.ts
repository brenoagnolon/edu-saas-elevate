export async function sendWebhook(formData: any) {
  try {
    const response = await fetch(
      "https://autowebhook.aasyncferramentas.space/webhook/86ec70a1-00aa-459a-975a-1ca40fe5a562",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Erro no envio ao webhook:", error);
    return false;
  }
}
