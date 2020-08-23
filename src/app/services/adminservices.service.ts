import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  addUserBody: any;
  updateuserbody: any;
  deleteuserbody: any;
  addCourseBody: any;
  updateCourseBody: any;
  coursesDepartmentbody: any;
  userProfileBody: any;
  userRolebody: any;
  deleteCoursebody: any;
  userCoursesBody: any;
  addUserCourseBody: any;
  addUserCourseId: any;
  deleteUserCourseBody: any;
  deleteUserCourseId: any;
  getCourseDataBody: any;
  addCourseGradeBody: any;
  addCourseGradeId: any;
  deleteCourseGradebody: any;
  deleteCourseGradetypebody: any;
  courseStudentsSheetBody: any;
  courseStudentsGradesBody: any;
  addStudentGradeBody: any;
  addStudentGradeId: any;
  courseGradeType: any;
  getStudentGradeCourseCode: any;
  getStudentGradeGradeType: any;
  getCourseGradeType: any;
  userId: any;
  updateStudentGradeBody: any;
  updateuserIdbody: any;
  updateCourseIdBody: any;
  studentIdBody: any;
  courseIdBody: any;
  lectureNumber: any;
  CourseId: any;
  studentIdBodyBody: any;
  gradeType: any;
  addCourseSemesterBody: any;
  myId: any;
  addRouterBody: any;
  updateRouterIdBody: any;
  updateRouterBody: any;
  deleterouterbody: any;
  url: any = "http://192.168.1.3:3000";


  addPostBody: any;
  deletepostbody: any;

  constructor(private httpClient: HttpClient) { }

  public profile(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get<User>(`${this.url}/profile/${this.userId}`);
  }

  public mypassword(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get<User>(`${this.url}/mypassword/${this.userId}`);
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }
  public getUsersByRole(role): Observable<any> {
    this.userRolebody = role;
    return this.httpClient.get<User[]>(`${this.url}/users/${this.userRolebody}`);
  }

  public addUser(_id, name, email, password, role, dataOfJoin): Observable<any> {
    this.addUserBody = { _id, name, email, password, role, dataOfJoin }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`${this.url}/add/user`, this.addUserBody, { headers: headers });
  }

  public updateUser(_id, name, email, password, role): Observable<any> {
    this.updateuserIdbody = _id;
    this.updateuserbody = { name, email, password, role }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/update/user/${this.updateuserIdbody}`, this.updateuserbody, { headers: headers });
  }

  public deleteUser(_id): Observable<any> {
    this.deleteuserbody = _id;
    return this.httpClient.delete(`${this.url}/delete/user/${this.deleteuserbody}`);
  }

  public changeEmail(_id, email): Observable<any> {
    this.updateuserIdbody = _id;
    this.updateuserbody = { email }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/update/user/${this.updateuserIdbody}`, this.updateuserbody, { headers: headers });
  }

  public changePassword(_id, password): Observable<any> {
    this.updateuserIdbody = _id;
    this.updateuserbody = { password }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/update/user/${this.updateuserIdbody}`, this.updateuserbody, { headers: headers });
  }


  public addPost(author_id, author_name, body, date): Observable<any> {
    this.addPostBody = { author_id, author_name, body, date }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`${this.url}/add/post`, this.addPostBody, { headers: headers });
  }
  public getPosts(): Observable<any> {
    return this.httpClient.get(`${this.url}/posts`);
  }
  public getmyPosts(id): Observable<any> {
    return this.httpClient.get(`${this.url}/my/posts/${id}`);
  }
  public deletePost(postId): Observable<any> {
    this.deletepostbody = postId;
    return this.httpClient.delete(`${this.url}/delete/post/${this.deletepostbody}`);
  }
}
