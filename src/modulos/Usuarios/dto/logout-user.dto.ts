class LogoutUserDto {
  public refreshToken?: string;

  constructor(refreshToken?: string) {
    this.refreshToken = refreshToken;
  }
}
export default LogoutUserDto;
