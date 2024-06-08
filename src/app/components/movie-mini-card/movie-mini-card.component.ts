import { Component, Input } from "@angular/core"

@Component({
	selector: "app-movie-mini-card",
	standalone: true,
	imports: [],
	templateUrl: "./movie-mini-card.component.html",
	styleUrl: "./movie-mini-card.component.scss",
})
export class MovieMiniCardComponent {
	@Input() Film: any = ""
}
