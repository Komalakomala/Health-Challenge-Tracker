import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getFilteredWorkouts(name: string, type: string, startIndex: number, limit: number): Workout[] {
    // Implement filtering logic based on name and type
    // Apply pagination with startIndex and limit
  }

  getWorkoutTypes(): string[] {
    // Implement logic to get unique workout types
  }
}
