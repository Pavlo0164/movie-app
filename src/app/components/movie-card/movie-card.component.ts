import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import Film from "../../models/film.model"
import InfoFromChild from "../../models/infoFromChild.model"
import { ChangeRatingPipe } from "../../pipes/change-rating/change-rating.pipe"

@Component({
	selector: "app-movie-card",
	standalone: true,
	imports: [CommonModule, ChangeRatingPipe],
	templateUrl: "./movie-card.component.html",
	styleUrl: "./movie-card.component.scss",
})
export class MovieCardComponent {
	@Input() film: Film | undefined
	@Input() isAddedToFavorite: boolean = false
	@Input() isAddedToWatch: boolean = false
	@Input() isShowDescription: boolean = true

	@Output() idToParent = new EventEmitter<InfoFromChild>()

	addFavoriteOrWatch(id: number, flag: string): void {
		this.idToParent.emit({
			id: id,
			flag: flag,
		})
	}
}
