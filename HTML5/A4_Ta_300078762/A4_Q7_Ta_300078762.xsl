<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="utf-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>
                    Nutrition information
                </title>
            </head>
            <body>
                <h1>
                    <xsl:value-of select="product/@name"/>
                    <xsl:text> Nutrition Facts</xsl:text>
                </h1>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount per <xsl:value-of select="product/Size"/></th>
                        </tr>
                    </thead>
                    <tr>
                        <td style="text-align: center">Total Calories:</td>
                        <td>
                            <xsl:value-of select="product/calories/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:center">Fat Calories:</td>
                        <td>
                            <xsl:value-of select="product/calories/fat"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Total fat:</td>
                        <td>
                            <xsl:value-of select="product/fat/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Saturated fat:</td>
                        <td>
                            <xsl:value-of select="product/fat/saturated"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Cholesterol:</td>
                        <td>
                            <xsl:value-of select="product/cholesterol"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Sodium:</td>
                        <td>
                            <xsl:value-of select="product/sodium"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Total carbohydrates:</td>
                        <td>
                            <xsl:value-of select="product/carbohydrates/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Fiber:</td>
                        <td>
                            <xsl:value-of select="product/fiber"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Sugar:</td>
                        <td>
                            <xsl:value-of select="product/sugars"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center">Protein:</td>
                        <td>
                            <xsl:value-of select="product/protein"/>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>