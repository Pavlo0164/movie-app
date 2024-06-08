import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
	selector: "app-movie-card",
	standalone: true,
	imports: [],
	templateUrl: "./movie-card.component.html",
	styleUrl: "./movie-card.component.scss",
})
export class MovieCardComponent {
	@Input() Film: any
	@Output() idToParent = new EventEmitter<any>()
	constructor() {}
	addFavorite(id: Number) {
		this.idToParent.emit({
			id: id,
			flag: "favorite",
		})
	}
	addWatchList(id: Number) {
		this.idToParent.emit({
			id: id,
			flag: "watch",
		})
	}
}
