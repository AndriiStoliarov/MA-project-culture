import { ProposalResponse } from '../../user/shared/types';

export interface Requirement {
    id?: number;
    description: string;
    proposals?: ProposalResponse[];
}
