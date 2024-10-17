namespace QuizVault.Domain.Interfaces;

public interface IFeatureEnabler<T> : IFeatureEnabler where T : IFeature
{
}

public interface IFeatureEnabler
{
    // TODO: Implement
    //public bool IsEnabledBy(QuizConfiguration configuration);
}
