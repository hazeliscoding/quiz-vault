namespace QuizVault.Domain.Interfaces;

public interface IDomainEventPublisher
{
    public Task Publish<T>(T domainEvent) where T : IDomainEvent;
}