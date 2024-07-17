import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  filteredWorkouts: Workout[] = [];
  searchName: string = '';
  filterType: string = '';
  currentPage: number = 1;
  workoutsPerPage: number = 5;

  constructor(public workoutService: WorkoutService) {}

  ngOnInit() {
    this.filteredWorkouts = this.workoutService.getWorkouts();
  }

  prevPage() {
    this.currentPage--;
    this.updateFilteredWorkouts();
  }

  nextPage() {
    this.currentPage++;
    this.updateFilteredWorkouts();
  }

  updateFilteredWorkouts() {
    const startIndex = (this.currentPage - 1) * this.workoutsPerPage;
    this.filteredWorkouts = this.workoutService.getFilteredWorkouts(
      this.searchName,
      this.filterType,
      startIndex,
      this.workoutsPerPage
    );
  }
}
