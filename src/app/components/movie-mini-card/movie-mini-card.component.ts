import { Component, DoCheck, Input } from "@angular/core"

@Component({
	selector: "app-movie-mini-card",
	standalone: true,
	imports: [],
	templateUrl: "./movie-mini-card.component.html",
	styleUrl: "./movie-mini-card.component.scss",
})
export class MovieMiniCardComponent implements DoCheck {
	@Input() id: number = 0
	@Input() films: any[] = []
	public film: any = ""
	ngDoCheck(): void {
		this.film = this.films.find((item) => item.id === this.id)
	}
}
