import { Proposal } from './proposal.interface';

export interface Requirement {
  id?: number;
  description: string;
  proposals?: Proposal[];
}
