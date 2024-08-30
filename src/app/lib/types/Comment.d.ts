export type Comment = {
    commentId: string;
    lessonId: string;
    userId: string;
    content: string;
    createdAt: string;
    like: number;
    user: {
        name: string;
    }
}