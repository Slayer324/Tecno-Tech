<?php include 'header.php'; ?>
    <main class="main">
        <h1>Contacto</h1>
        <form action="enviar.php" method="post" class="contact-form">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    </main>
  <?php include 'footer.php'; ?>