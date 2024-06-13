import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
	name: "changeRating",
	standalone: true,
})
export class ChangeRatingPipe implements PipeTransform {
	transform(value: number): string {
		return value.toFixed(1)
	}
}
