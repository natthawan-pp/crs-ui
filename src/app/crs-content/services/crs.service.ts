import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CrsService {
  constructor(private http: HttpClient) {}

  async getAllCrsBasicSubjectMaster() {
    let response: any;
    response = await this.http.get(environment.crsApiEndpoint + '/api/crs-basic-subject-master/getAll').toPromise();
    return response as any[];
  }

  async getAllCrsSkillBaseMaster() {
    let response: any;
    response = await this.http.get(environment.crsApiEndpoint + '/api/crs-skill-base-master/getAll').toPromise();
    return response as any[];
  }

  async getAllCrsPersonalityMaster() {
    let response: any;
    response = await this.http.get(environment.crsApiEndpoint + '/api/crs-personality-master/getAll').toPromise();
    return response as any[];
  }

  // async getCrsBasicSubjectMasterByRowId(rowId: string) {
  //   let response: any;
  //   response = await this.http.get(environment.crsApiEndpoint +'/api/crs-basic-subject-master/getByRowId/' + rowId).toPromise();
  //   return response as any;
  // }

  // async getCrsBasicSubjectMasterBySubjectLevel(subjectlevel: string) {
  //   let response: any;
  //   response = await this.http.get(environment.crsApiEndpoint +'/api/crs-basic-subject-master/getBySubjectLevel/' + subjectlevel).toPromise();
  //   return response as any;
  // }

  async getPredictData(basicSubjectList: any[], skillBaseList: any[]) {
    let newData = { dataSetBasicSubject : basicSubjectList, dataSetSkillBase: skillBaseList }
    let response: any;
    response = await this.http.post(environment.crsApiEndpoint +'/api/predict-data' , newData).toPromise();
    return response as any;
  }

}
