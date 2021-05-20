import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Proposal } from '../../../shared/types';

@Injectable({ providedIn: 'root' })
export class ProposalService {
  ROOT_URL = 'http://52.57.253.240:3000/api/proposals';

  constructor(private http: HttpClient) {}

  getProposalById(id: number): Observable<Proposal> {
    return this.http.get<Proposal>(`http://52.57.253.240:3000/api/proposals/${id}.json`).pipe(
      map((proposal: Proposal) => proposal),
    );
  }
}
