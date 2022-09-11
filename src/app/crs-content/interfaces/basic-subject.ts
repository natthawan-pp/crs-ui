export interface BasicSubject {
    row_id: string,
    subject_level: string,
    subject_name_th: string,
    subject_name_en: string,
    parent_row_id: string,
    created_at: Date,
    updates_at: Date,
}

export class BasicSubjectInitialObj {
    static BasicSubject(): BasicSubject {
        return {
            row_id: null,
            subject_level: null,
            subject_name_th: null,
            subject_name_en: null,
            parent_row_id: null,
            created_at: null,
            updates_at: null,
        }
    }
}