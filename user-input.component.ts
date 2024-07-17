import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    this.workoutService.addWorkout({
      userName: this.userName,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes
    });

    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
