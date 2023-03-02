<template>
  <div class="contact">
    <section>
      <div class="contact__form">
        <div class="form">
          <div class="texto">
            <h2>Hablemos !</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam officia corrupti provident ad at
              laborum pariatur sint tenetur sed cumque unde, fuga iusto reprehenderit tempora aspernatur. Ab cumque
              sapiente porro?</p>
          </div>
          <form action="">
            <div class="inputBox">
              <label for="">Name</label>
              <input type="text" placeholder="Name">
            </div>
            <div class="inputBox">
              <label for="">Email</label>
              <input type="email" placeholder="Email">
            </div>
            <div class="inputBox">
              <label for="">Your Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <input type="submit" value="Enviar Mensaje">
          </form>
        </div>
        <div class="info">
          <div class="imgBox">
            <img src="../assets/email.svg" alt="">
          </div>
          <div class="textBox">
            <div class="infoContact">
              <ion-icon name="map"></ion-icon>
              <p>P.º Hospicio 22-Local 3076, San Juan de Dios, 44360 Guadalajara, Jal.</p>
            </div>
            <div class="infoContact">
              <ion-icon name="call"></ion-icon>
              <p>+1 (111) 1111</p>
            </div>
            <div class="infoContact">
              <ion-icon name="mail"></ion-icon>
              <p>contacto@email.com</p>
            </div>
          </div>
          <div class="rrss">
            <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
            <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
            <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>

      </div>
    </section>
  </div>


</template>

<script>
export default {

}
</script>

<style scoped>
.contact {
  width: 100%;
  height: auto;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  box-shadow: rgba(0, 0, 0, 0.9) 0px 1px 2px 0px;
}

.contact section {
  position: relative;
  width: 100%;
  margin: 1em 1em;
  padding-top: 50px;
  height: auto;
  display: grid;
  place-items: center;

}

.contact section .contact__form {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 80px;
  padding: 40px 80px;
  width: 100%;
  height: auto;
  background: #f7fcff07;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 1px;

}

.contact__form .form {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;

}

.contact__form .form form {
  width: 100%;
}

.contact__form .form h2 {
  color: #151515e8;
  font-size: 2.5em;
  font-weight: 800;
  margin-bottom: 10px;
}

.contact__form .form p {
  color: #333333;
  line-height: 1.3;
  text-align: justify;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 20px;
}

.contact__form .form form .inputBox {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.contact__form .form form .inputBox label {
  color: #333333;
  font-weight: 300;
  font-size: 1.2rem;
}

.contact__form .form form .inputBox input[type="text"],
.contact__form .form form .inputBox input[type="email"],
.contact__form .form form .inputBox textarea {
  border: none;
  color: rgb(0, 0, 0);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin: 0.7rem 0.3rem;
  background-color: #fcfcf6;
  font-weight: 300;
  resize: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

}

.inputBox input {
  padding: 0.8em;
}

.inputBox input:focus {
  outline: 2px solid #1766a3;
}

.form form input[type="submit"] {
  background: #1766a3;
  display: inline-block;
  text-align: center;
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  box-shadow: 1px 9px 20px -5px rgba(0, 0, 0, 0.126);
  transition: 0.3s;
}

.form form input[type="submit"]:hover {
  background: #0b426c;
}

/* contenedor información*/
.contact__form .info {
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* imagen */
.contact__form .info .imgBox {
  position: relative;
  width: 350px;
  height: 350px;
}

.contact__form .info .imgBox img {
  position: absolute;
  top: 0;
  left: 40%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact__form .info .textBox {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.contact__form .info .textBox .infoContact {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
}

.contact__form .info .textBox .infoContact ion-icon {
  font-size: 2em;
  margin-right: 10px;
  color: #0b426c;
}

.contact__form .info .textBox .infoContact p {
  color: #0b426c;
}
.contact__form .info .rrss a{
  padding: 20px;
  font-size: 2em;
  color: #1766a3;
  transition: all 0.3s;
}

@media only screen and (max-width: 1200px) {
  .contact section .contact__form {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
@media only screen and (max-width: 768px) {
  .contact__form .info{
    height: 300px;
    padding: 20px;
  }
  .contact__form .info .imgBox{
    display: none;
  }

}
@media only screen and (max-width: 600px) {
  .contact__form .form{
    margin-left: 0px;
    width: 90%;
  }
  .contact__form .info{
    margin-bottom: 20px;
  }
}
</style>
