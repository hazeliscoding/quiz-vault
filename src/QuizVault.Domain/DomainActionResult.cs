namespace QuizVault.Domain;

public class DomainActionResult
{
    public DomainActionResult()
    {
    }

    public DomainActionResult(string errorMessage)
    {
        Error = new(errorMessage);
    }

    public DomainActionResult(DomainError error)
    {
        Error = error;
    }

    public DomainError? Error { get; }

    public bool WasSuccessful => Error == null;

    public static DomainActionResult Merge(params Func<DomainActionResult>[] actions)
    {
        foreach (var action in actions)
        {
            var result = action();
            if (!result.WasSuccessful)
            {
                return result;
            }
        }
        return new();
    }

    public async Task<DomainActionResult> AndIfSuccessful(Func<Task> action)
    {
        if (WasSuccessful)
        {
            await action();
        }
        return this;
    }

    public DomainActionResult AndIfSuccessful(Action action)
    {
        if (WasSuccessful)
        {
            action();
        }
        return this;
    }
}