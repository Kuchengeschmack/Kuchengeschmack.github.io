import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  template: `
    <article class="article">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthierry.reale%2Fposts%2Fpfbid0Qi6Jt6cTp3Ujcz4UttvcpFyyXP12BJDLvJybSPri2vjexePEVtvg1KtmC3YukCFCl&show_text=true&width=500"
        width="500"
        height="673"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </article>
  `,
  styles: `
    .article {
      text-align: center;
    }
  `,
})
export class IntroComponent {}
