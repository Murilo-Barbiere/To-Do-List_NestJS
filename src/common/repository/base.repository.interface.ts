export abstract class IBaseRepository<model> {
  abstract save(data: any): Promise<model>;
  abstract findById(id: string): Promise<model | null>;
  abstract findAll(): Promise<model[]>;
  abstract delete(id: string): Promise<void>;
}