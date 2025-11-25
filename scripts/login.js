const form = document.getElementById("loginForm");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      try {
        const response = await fetch("https://allwearback00.vercel.app/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
          mensagem.textContent = "Login realizado com sucesso!";
          window.location.href = "genero.html";
          // opcional: salvar token no localStorage
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
        } else {
          mensagem.textContent = (data.error || "Erro no login");
        }
      } catch (err) {
        mensagem.textContent = "Erro de conexão com o servidor.";
      }
    });