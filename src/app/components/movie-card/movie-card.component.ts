import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Film } from "../movie-list/movie-list.component"

import { InfoFromChild } from "../movie-list/movie-list.component"
@Component({
	selector: "app-movie-card",
	standalone: true,
	imports: [],
	templateUrl: "./movie-card.component.html",
	styleUrl: "./movie-card.component.scss",
})
export class MovieCardComponent {
	@Input() Film: Film | undefined
	@Output() idToParent = new EventEmitter<InfoFromChild>()
	public checkedFavorite: number = 0
	public checkedWatch: number = 0
	public butttonWatch = "Watch list"
	public buttonFavorite = "Favorite"
	addFavorite(id: number) {
		let typeEvent: string = ""
		if (this.checkedFavorite) {
			typeEvent = "delete"
			this.checkedFavorite = 0
		} else {
			this.checkedFavorite = id
			typeEvent = "add"
		}
		this.idToParent.emit({
			id: id,
			flag: "favorite",
			typeEvent: typeEvent,
		})
	}
	addWatchList(id: number) {
		let typeEvent: string = ""
		if (this.checkedWatch) {
			this.checkedWatch = 0
			typeEvent = "delete"
		} else {
			this.checkedWatch = id
			typeEvent = "add"
		}
		this.idToParent.emit({
			id: id,
			flag: "watch",
			typeEvent: typeEvent,
		})
	}
}
