<script>
    
</script>
  
  <nav class="navbar">
    <ul>
      <li><a href="www.google.com">Inicio</a></li>
      <li><a href="www.google.com">Acerca de</a></li>
    </ul>
  </nav>
  
<style>
    .navbar {
      background-color: #333;
      padding: 10px;
    }
  
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: space-around;
    }
  
    li {
      margin-right: 20px;
    }
  
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    @media (max-width:428px) {
      /* Estilos para pantallas más pequeñas (por ejemplo, dispositivos móviles) */
      ul {
        flex-direction: column; /* Apilar los enlaces verticalmente */
        text-align: center; /* Centrar el texto */
      }
  
      li {
        margin: 10px 0; /* Espaciado entre enlaces */
      }
    }
</style>
  