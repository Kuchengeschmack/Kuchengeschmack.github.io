import { Component } from '@angular/core';

@Component({
  selector: 'app-piano',
  standalone: true,
  imports: [],
  template: `
    <article class="article">
      <h1>Cours de piano disponibles dès maintenant !</h1>
      <h2>Bagnères de Bigorre</h2>
      <p>
        Je suis une pianiste expériementée offrant des cours de piano
        personnalisés pour tous les âges et tous les niveaux.
      </p>
      <ul>
        <li>
          Apprenez dans une atmosphère chaleureuse et encourageante qui
          transforme chaque leçon en une expérience agréable et enrichissante.
        </li>
        <li>
          Chaque élève est unique, et mes cours sont adaptés à vos goûts
          musicaux, votre rythme d'apprentissage et vos objectfs personnels.
        </li>
        <li>
          Je possède plus de 20 ans d'expérience dans l'enseignement du piano
          que j'ai exercé entre autres en Centre Culturel.
        </li>
        <li>
          Ma méthodologie et mon grand sens relationnel m'ont toujours permis de
          développer une bonne ambiance de travail avec mes élèves.
        </li>
        <li>
          J'ai toujours voulu partager ma passion pour la musique et
          l'enseignement m'a apporté un réel épanouissment.
        </li>
      </ul>
      <p>
        L'efficacité de l'apprentissage dans la bonne humeur est mon objectif.
      </p>
      <p>
        Contactez-moi dès aujourd'hui au <strong>06.83.73.61.84</strong> afin de
        réserver votre première leçon et commencer votre voyage musical.
      </p>
    </article>
  `,
  styles: `
    .article {
      width: fit-content;
      margin: 0 auto;

      h1,
      h2,
      p {
        text-align: center;
      }
    }
  `,
})
export class PianoComponent {}
