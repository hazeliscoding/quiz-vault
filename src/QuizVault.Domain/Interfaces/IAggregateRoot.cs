namespace QuizVault.Domain.Interfaces;

public interface IAggregateRoot<out T> where T : struct
{
    public T Id { get; }
    public ICollection<IDomainEvent> DomainEvents { get; }
}
