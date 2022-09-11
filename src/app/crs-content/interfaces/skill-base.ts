export interface SkillBase {
    row_id: string,
    skill_base_level: string,
    skill_base_th: string,
    skill_base_en: string,
    parent_row_id: string,
    created_at: Date,
    updates_at: Date,
}

export class SkillBaseInitialObj {
    static SkillBase(): SkillBase {
        return {
            row_id: null,
            skill_base_level: null,
            skill_base_th: null,
            skill_base_en: null,
            parent_row_id: null,
            created_at: null,
            updates_at: null,
        }
    }
}