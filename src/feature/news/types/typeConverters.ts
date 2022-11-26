import { HackerStoryDTO, UserDTO } from "feature/news/types/dto";
import { HackerStory, User } from "feature/news/types";

export function HackerStory_Dto_to_Internal(dto: HackerStoryDTO): HackerStory {
    return {
        id: dto.id,
        title: dto.title,
        url: dto.url,
        timestamp: dto.timestamp,
        score: dto.score,
        authorId: dto.by,
    }
}

export function User_Dto_to_Internal(dto: UserDTO): User {
    return {
        id: dto.id,
        created: dto.created,
        karma: dto.karma,
        about: dto.about,
    }
}