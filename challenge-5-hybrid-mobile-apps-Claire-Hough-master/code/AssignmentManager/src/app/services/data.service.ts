import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Assignment } from 'src/types'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private assignmentsCollection: AngularFirestoreCollection<Assignment>;
  private assignments: Observable<Assignment[]>;

  constructor(private db: AngularFirestore) { 
    this.assignmentsCollection = db.collection<Assignment>('assignments');

    this.assignments = this.assignmentsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getAssignments(){
    return this.assignments;
  }

  getAssignment(id){
    return this.assignmentsCollection.doc<Assignment>(id).valueChanges();
  }

  updateAssignment(assignment: Assignment, id: string){
    return this.assignmentsCollection.doc(id).update(assignment);
  }

  addAssignment(assignment: Assignment){
    return this.assignmentsCollection.add(assignment);
  }

  removeAssignment(id){
    this.assignmentsCollection.doc(id).delete();
  }

  archiveAssignment(assignment: Assignment, id: string){
    assignment.archived = 'Yes';
    this.updateAssignment(assignment, id);
  }
}
