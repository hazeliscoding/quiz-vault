namespace QuizVault.Domain.Interfaces;

public interface IRepository<T, in TK> where T : IAggregateRoot<TK> where TK : struct
{
    public Task Create(T aggregateRoot, CancellationToken cancellationToken);
    public Task<T?> GetById(TK id, CancellationToken cancellationToken);
    public Task Update(T aggregateRoot, CancellationToken cancellationToken);
    public Task Delete(T aggregateRoot, CancellationToken cancellationToken);
}