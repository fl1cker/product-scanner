import { KeywordList } from "../models/keyword-list";

export function GetMockKeywordList(): Promise<KeywordList[]> {
    return Promise.resolve(
        [
            {
                isActive: true,
                category: 'MSG',
                values: ['Yeast Extract', 'Monosodium Glutamate', 'Hydrolized Soy Protein']
            }
        ]
    )

}