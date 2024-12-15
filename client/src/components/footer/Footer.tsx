import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        <a
          href="https://www.youtube.com/watch?v=OfFPtvX4xpQ&ab_channel=Diam'sofficiel"
          className={style.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          ©
        </a>{" "}
        Coup de main local - 2024{" "}
      </p>
      <div className={style.footerName}>
        <p>
          Amandine Grard-Laurent,
          <br />
          Maxime Tricoche,
          <br />
          Mathieu Foucault,
          <br />
          Vincent Ching,
          <br />
          Marvin Calmo
        </p>
      </div>
    </footer>
  );
}
