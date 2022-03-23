export interface IUserDto {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string
}

export type SendUser = Omit<IUserDto, 'id'>;