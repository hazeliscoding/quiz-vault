namespace QuizVault.Domain.Interfaces;

public interface IAudited
{
    public DateTimeOffset DateUpdated { get; }

    internal DomainActionResult Audit(Action auditAction);
}