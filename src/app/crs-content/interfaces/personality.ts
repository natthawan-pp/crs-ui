export interface Personality {
    row_id: string,
    personality_level: string,
    personality_name_th: string,
    personality_name_en: string,
    parent_row_id: string,
    created_at: Date,
    updates_at: Date,
}

export class PersonalityInitialObj {
    static Personality(): Personality {
        return {
            row_id: null,
            personality_level: null,
            personality_name_th: null,
            personality_name_en: null,
            parent_row_id: null,
            created_at: null,
            updates_at: null,
        }
    }
}