(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['orderItem'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\">\n  <div class=\"ui smaller image\">\n    <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imgUrl") || (depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":23}}}) : helper)))
    + " />\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":6,"column":24},"end":{"line":6,"column":36}}}) : helper)))
    + "</div>\n    <div class=\"meta\">\n      <span class=\"price\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":35}}}) : helper)))
    + "</span>\n      <span class=\"quantity\">Qty: "
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":46}}}) : helper)))
    + "</span>\n    </div>\n  </div>\n</div>";
},"useData":true});
})();