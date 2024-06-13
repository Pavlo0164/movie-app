import { filmsList } from "./../../mock-data/films-list"
import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MovieCardComponent } from "../movie-card/movie-card.component"
import Film from "../../models/film.model"
import InfoFromChild from "../../models/infoFromChild.model"

@Component({
	selector: "app-movie-list",
	standalone: true,
	imports: [MovieCardComponent, CommonModule],
	templateUrl: "./movie-list.component.html",
	styleUrl: "./movie-list.component.scss",
})
export class MovieListComponent implements OnInit {
	public filmInWatch: Set<number> = new Set()
	public filmInFavorite: Set<number> = new Set()
	public filmsList: Film[] = filmsList
	public filmsMap: Map<number, Film> = new Map()

	ngOnInit(): void {
		this.filmsList.forEach((item) => this.filmsMap.set(item.id, item))
	}

	workWithFilm(filmsIdArr: Set<number>, id: number): void {
		if (filmsIdArr.has(id)) filmsIdArr.delete(id)
		else filmsIdArr.add(id)
	}
	addFilm(idAndFlag: InfoFromChild): void {
		if (idAndFlag.flag === "watch")
			this.workWithFilm(this.filmInWatch, idAndFlag.id)
		else this.workWithFilm(this.filmInFavorite, idAndFlag.id)
	}
}
