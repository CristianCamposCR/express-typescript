import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; //aserción de tipos

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry != null) {
        const {comment, ...restOfDiary} = entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id, 
            date, 
            weather, 
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1, //funciona aunque no esten consecutivos
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
};