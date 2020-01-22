//our root app component
import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'like-app',
    template: `
       <button (click)="likeButtonClick()" [ngClass]="{'liked': isLiked == true}" class = "like-button">Like|{{initialCount}}</button>
    `,

     styles: [`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            kk:  #585858;
        }

        .liked {
            font-weight: bold;
            color: #1565c0;
        }
    `]
})
export class App {
    initialCount: number = 100;
    isLiked: boolean ;
    likeButtonClick(){
        if(this.isLiked == true){
            this.isLiked = false;   
             this.initialCount--;
        }
        else{
           this.isLiked = true;
            this.initialCount++;
        }
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [App],
    bootstrap: [App],
})
export class AppModule {}
