import { Component, DoCheck, Input } from "@angular/core"
import { Film } from "../movie-list/movie-list.component"
@Component({
	selector: "app-movie-mini-card",
	standalone: true,
	imports: [],
	templateUrl: "./movie-mini-card.component.html",
	styleUrl: "./movie-mini-card.component.scss",
})
export class MovieMiniCardComponent implements DoCheck {
	@Input() id: number = 0
	@Input() films: Film[] = []
	public film: Film | undefined
	ngDoCheck(): void {
		this.film = this.films.find((item) => item.id === this.id)
	}
}
