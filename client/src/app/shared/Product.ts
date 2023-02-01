export class Product
{
    id: number | undefined ;
    category: string | undefined;
    size: string | undefined;
    price: number | undefined;
    title: string | undefined;
    artDescription: string | undefined;
    artDating: string | undefined;
    artId!: string;
    artist: string | undefined;
    artistBirthDate: Date | undefined;
    artistDeathDate: Date | undefined;
    artistNationality: string | undefined;
}