export function tags() {
  var tags = {
    nodejs: '<i class="fab fa-node-js"></i>',
    aws: '<i class="fab fa-aws"></i>',
    python: '<i class="fab fa-python"></i>',
    django: '<i class="fab fa-python"></i>',
    nosql: '<i class="fab fa-envira"></i>',
    restapis: '<i class="fab fa-hubspot"></i>',
    frontend: '<i class="far fa-code"></i>',
    data: '<i class="fas fa-chart-pie"></i>',
    mysql: '<i class="fas fa-database"></i>',
    javascript: '<i class="fab fa-js-square"></i>',
    roundup: '<i class="fas fa-undo-alt"></i>',
    excel: '<i class="fal fa-table"></i>',
    devops: '<i class="fas fa-server"></i>',
    pandas: '<i class="fas fa-paw"></i>',
    datascience: '<i class="fas fa-flask"></i>',
    tableau: '<i class="far fa-asterisk"></i>',
    googlecloud: '<i class="fab fa-google"></i>',
    sql: '<i class="fas fa-database"></i>',
    statistics: '<i class="far fa-chart-area"></i>',
    flask: '<i class="fab fa-affiliatetheme"></i>',
    expressjs: '<i class="fab fa-etsy"></i>',
    atlassian: '<i class="fab fa-trello"></i>',
    codesnippetcorner: '<i class="fal fa-laptop-code"></i>',
    saas: '<i class="fal fa-desktop-alt"></i>',
    datavis: '<i class="fal fa-chart-pie"></i>',
    plotly: '<i class="fas fa-chart-bar"></i>',
    postgresql: '<i class="fas fa-elephant"></i>',
    bigdata: '<i class="far fa-chart-network"></i>',
    graphql: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GraphQL icon</title><path d="M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z"></path></svg>',
    dataengineering: '<i class="far fa-wrench"></i>'
  };

  for (var key in tags) {
    $('.' + key).find('i').replaceWith(tags[key]);
  }
}
