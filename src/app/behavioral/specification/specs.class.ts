export abstract class Spec {
  public abstract isSatisfiedBy(value: number): boolean;

  public and(spec: Spec): Spec {
    return new AndSpec(this, spec);
  }

  public or(spec: Spec): Spec {
    return new OrSpec(this, spec);
  }

  public not(): Spec {
    return new NotSpec(this);
  }
}

class AndSpec extends Spec {
  constructor(private leftSpec: Spec, private rightSpec: Spec) {
    super();
  }

  public isSatisfiedBy(value: number): boolean {
    return this.leftSpec.isSatisfiedBy(value) && this.rightSpec.isSatisfiedBy(value);
  }
}

class OrSpec extends Spec {
  constructor(private leftSpec: Spec, private rightSpec: Spec) {
    super();
  }

  public isSatisfiedBy(value: number): boolean {
    return this.leftSpec.isSatisfiedBy(value) || this.rightSpec.isSatisfiedBy(value);
  }
}

class NotSpec extends Spec {
  constructor(private spec: Spec) {
    super();
  }

  public isSatisfiedBy(value: number): boolean {
    return !this.spec.isSatisfiedBy(value);
  }
}
