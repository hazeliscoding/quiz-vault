namespace QuizVault.Domain;

public class DomainError(string message)
{
    public string Message { get; } = message;
}